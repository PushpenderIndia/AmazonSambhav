import instaloader

class InstaFetcher:
    loader = instaloader.Instaloader()
    username = "bdaaneelatatta"
    password = "neelatatta@123"
    loader.login(username, password)

    def fetch(self, username):
        try:
            profile = instaloader.Profile.from_username(self.loader.context, username)
            posts = profile.get_posts()
            post_links = []
            for i, post in enumerate(posts):
                if i >= 5:
                    break
                post_url = f"https://www.instagram.com/p/{post.shortcode}/"
                post_links.append(post_url)
                print(f"Post {i+1}: {post_url}")
            return post_links
        except Exception as e:
            print(f"An error occurred: {e}")
            return e

if __name__ == "__main__":
    fetcher = InstaFetcher()
    fetcher.fetch("roshniwaliaa")
