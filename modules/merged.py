import os
import glob
from instaloader import Instaloader, Post
from PIL import Image
import pytesseract
from gemini import GeminiAnalyzer  # Importing the GeminiAnalyzer class


class InstagramProcessor:
    def __init__(self, base_folder="insta"):
        """
        Initializes the InstagramProcessor class.

        :param base_folder: The base folder where all data will be saved.
        """
        self.base_folder = base_folder
        if not os.path.exists(self.base_folder):
            os.makedirs(self.base_folder)
        self.gemini_analyzer = GeminiAnalyzer()  # Initialize GeminiAnalyzer

    def download_post(self, url):
        """
        Downloads Instagram post media and description using Instaloader.

        :param url: The URL of the Instagram post.
        :return: The post description if available.
        """
        loader = Instaloader(download_videos=True, save_metadata=False)
        post_description = None

        try:
            # Extract shortcode and download the post
            shortcode = url.split("/p/")[1].split("/")[0]
            post = Post.from_shortcode(loader.context, shortcode)
            loader.download_post(post, target=self.base_folder)

            # Find and read the post description file
            for file in os.listdir(self.base_folder):
                if file.endswith(".txt"):
                    description_path = os.path.join(self.base_folder, file)
                    with open(description_path, "r", encoding="utf-8") as desc_file:
                        post_description = desc_file.read().strip()
                    break

            print(f"Post downloaded successfully to {self.base_folder}.")
        except Exception as e:
            print(f"Error downloading the post: {e}")

        return post_description

    def perform_ocr(self):
        """
        Performs OCR on all images in the base folder.

        :return: The concatenated OCR text.
        """
        ocr_output_file = os.path.join(self.base_folder, "ocr.txt")
        ocr_text = []

        # Initialize the output file
        with open(ocr_output_file, "w", encoding="utf-8") as ocr_file:
            ocr_file.write("OCR Results:\n\n")

        # Process images for OCR
        for file_name in sorted(os.listdir(self.base_folder)):
            file_path = os.path.join(self.base_folder, file_name)
            if file_name.lower().endswith(('.png', '.jpg', '.jpeg', '.bmp', '.tiff')):
                try:
                    text = pytesseract.image_to_string(Image.open(file_path))
                    ocr_text.append(f"--- {file_name} ---\n{text.strip()}\n")
                    with open(ocr_output_file, "a", encoding="utf-8") as ocr_file:
                        ocr_file.write(f"--- {file_name} ---\n{text.strip()}\n\n")
                except Exception as e:
                    print(f"Error performing OCR on {file_name}: {e}")

        return "\n".join(ocr_text)

    def analyze_with_gemini(self):
        """
        Analyze images and videos in the base folder using Gemini.

        :return: Generated content describing the media files.
        """
        # Collect all media files in the folder
        media_files = glob.glob(os.path.join(self.base_folder, '*'))
        media_files = [file for file in media_files if file.lower().endswith(
            ('.png', '.jpg', '.jpeg', '.bmp', '.tiff', '.mp4', '.mov', '.avi')
        )]

        if not media_files:
            print("No valid images or videos found for Gemini analysis.")
            return None

        # Separate images and videos
        image_files = [file for file in media_files if file.lower().endswith(('.png', '.jpg', '.jpeg', '.bmp', '.tiff'))]
        video_files = [file for file in media_files if file.lower().endswith(('.mp4', '.mov', '.avi'))]

        results = {}

        # Analyze images with Gemini
        if image_files:
            try:
                print("Analyzing images with Gemini...")
                image_results = self.gemini_analyzer.process_images(image_files)
                results["images"] = image_results
            except Exception as e:
                print(f"Error during image analysis: {e}")

        # Analyze videos with Gemini
        if video_files:
            try:
                print("Analyzing videos with Gemini...")
                video_results = []
                for video_file in video_files:
                    result = self.gemini_analyzer.process_video(video_file)
                    video_results.append({video_file: result})
                results["videos"] = video_results
            except Exception as e:
                print(f"Error during video analysis: {e}")

        return results

    def process_post(self, url):
        """
        Main function to process an Instagram post: download, OCR, and Gemini analysis.

        :param url: The URL of the Instagram post.
        :return: A dictionary with images, post description, OCR text, and analysis results.
        """
        # Step 1: Download Instagram post
        print("Downloading Instagram post...")
        post_description = self.download_post(url)

        # Step 2: Perform OCR
        print("Performing OCR on images...")
        ocr_text = self.perform_ocr()

        # Step 3: Analyze media with Gemini
        print("Analyzing media with Gemini...")
        gemini_results = self.analyze_with_gemini()

        # Compile results
        results = {
            "post_description": post_description,
            "ocr_text": ocr_text,
            "gemini_results": gemini_results,
        }

        return results


# Example usage
if __name__ == "__main__":
    url = input("Enter the Instagram post URL: ")
    import shutil
    shutil.rmtree('insta', ignore_errors=True)
    processor = InstagramProcessor()
    results = processor.process_post(url)
    print("\nProcessing complete. Results:")
    print(results)
