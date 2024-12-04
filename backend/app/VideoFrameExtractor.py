import cv2
import os

class VideoFrameExtractor:
    def __init__(self, video_path, output_folder="static"):
        """
        Initializes the VideoFrameExtractor.

        :param video_path: Path to the video file.
        :param output_folder: Directory where extracted frames will be saved.
        """
        self.video_path = video_path
        self.output_folder = output_folder
        self._validate_video_path()
        self._create_output_folder()

    def _validate_video_path(self):
        """Validates the existence of the video file."""
        if not os.path.isfile(self.video_path):
            raise FileNotFoundError(f"The video file '{self.video_path}' does not exist.")

    def _create_output_folder(self):
        """Creates the output folder if it does not exist."""
        os.makedirs(self.output_folder, exist_ok=True)

    def extract_frames(self):
        """
        Extracts frames from the video every 2 seconds.

        :return: List of file paths to the extracted frames.
        """
        cap = cv2.VideoCapture(self.video_path)
        if not cap.isOpened():
            raise Exception("Failed to open the video file.")

        fps = cap.get(cv2.CAP_PROP_FPS)  # Get frames per second
        interval = int(fps * 1)  # Number of frames corresponding to 1 seconds

        frame_paths = []
        frame_count = 0
        frame_index = 0

        while True:
            ret, frame = cap.read()
            if not ret:
                break

            if frame_count % interval == 0:
                frame_name = f"frame_{frame_index:04d}.jpg"
                frame_path = os.path.join(self.output_folder, frame_name)
                cv2.imwrite(frame_path, frame)
                frame_paths.append(frame_path)
                frame_index += 1

            frame_count += 1

        cap.release()
        return frame_paths

# Example usage
if __name__ == "__main__":
    video_file = "/home/byte/Projects/hackathons/amazon_sambhav/reel_images/watch.mp4"
    extractor = VideoFrameExtractor(video_file)
    frame_files = extractor.extract_frames()
    print("Extracted frames:", frame_files)