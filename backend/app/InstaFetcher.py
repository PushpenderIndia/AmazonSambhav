import requests
from pprint import pprint

class InstaFetcher:
    def __init__(self, api_key: str):
        """
        Initialize the InstaFetcher with the provided API key.
        
        :param api_key: API key for authentication
        """
        # self.api_url = "https://instagram-scraper-api3.p.rapidapi.com/user_posts"
        # self.api_host = "instagram-scraper-api3.p.rapidapi.com"
        self.api_url = "https://instagram-scraper-api2.p.rapidapi.com/v1.2/posts"
        self.api_host = "instagram-scraper-api2.p.rapidapi.com"
        self.api_key = api_key

    def get_user_posts(self, username: str, count: int = 5):
        """
        Fetch user posts from the Instagram API.
        
        :param username: Instagram username or ID
        :param count: Number of posts to fetch (default is 5)
        :return: JSON response from the API
        """
        headers = {
            "x-rapidapi-host": self.api_host,
            "x-rapidapi-key": self.api_key,
        }
        params = {
            "username_or_id_or_url": username,
        }

        try:
            response = requests.get(self.api_url, headers=headers, params=params)
            response.raise_for_status()
            all_data = response.json()
            username = all_data["data"]["user"]["username"]
            all_posts_data = all_data["data"]["items"]
            posts = []
            for post in all_posts_data:
                post_code = post["code"]
                if post["is_video"] == False:
                    video_list = []
                    images_data = post["image_versions"]["items"]
                    for image in images_data:
                        video_list.append(image["url"])
                    posts.append({
                        "post_link": f"https://www.instagram.com/{username}/p/{post_code}/",
                        "image_url": video_list,
                        "description": post["caption"]["text"],
                    })
            return posts
        except requests.exceptions.RequestException as e:
            print(f"An error occurred: {e}")
            return None

# Example usage:
if __name__ == "__main__":
    api_key = input("Enter your API key: ")
    username = input("Enter the Instagram username: ")
    
    scraper = InstaFetcher(api_key)
    posts = scraper.get_user_posts(username)
    
    pprint(posts)
