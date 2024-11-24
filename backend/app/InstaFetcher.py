import instaloader

class InstaFetcher:
    loader = instaloader.Instaloader()

    def fetch(self, username):
        try:
            profile = instaloader.Profile.from_username(self.loader.context, username)
            posts = profile.get_posts()
            for i, post in enumerate(posts):
                if i >= 5:
                    break
                print(post.url)
            # for i, post in enumerate(posts):
            #     if i >= 5:
            #         break
            #     print(f"Downloading post {i+1} - {post.url}")
            #     self.loader.download_post(post, target=f"{username}_post_{i+1}")
        except Exception as e:
            print(f"An error occurred: {e}")

if __name__ == "__main__":
    fetcher = InstaFetcher()
    fetcher.fetch("bata.india")
