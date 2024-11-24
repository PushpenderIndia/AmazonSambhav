from rest_framework import viewsets
from rest_framework.response import Response
from permissions.clerk import ClerkAuthenticated
from .models import ConnectedSocialMedia, ProductListings
from rest_framework.views import APIView
from .serializers import ConnectedSocialMediaSerializer

post_data = [
    {
        "id": 1,
        "title": "Travelling to Dubai",
        "description": "It was an amazing trip"
    }
]

class PostViewset(viewsets.ViewSet):
    """
    A simple ViewSet for listing or retrieving users.
    """
    permission_classes = [ClerkAuthenticated]
    def list(self, request):
        return Response(post_data)

class ConnectedSocialMediaAPI(APIView):
    permission_classes = [ClerkAuthenticated]
    def get(self, request):
        connected_social_media = ConnectedSocialMedia.objects.first()
        serializer = ConnectedSocialMediaSerializer(connected_social_media)
        return Response(serializer.data)

class UpdateConnectedSocialMediaAPI(APIView):
    permission_classes = [ClerkAuthenticated]
    def post(self, request):
        data = request.data
        connected_social_media = ConnectedSocialMedia.objects.first()
        instagram_link = data.get('instagram_link', '')
        facebook_link = data.get('facebook_link', '')
        tiktok_link = data.get('tiktok_link', '')
        if not connected_social_media:
            connected_social_media = ConnectedSocialMedia(instagram_link=instagram_link, facebook_link=facebook_link, tiktok_link=tiktok_link)
            connected_social_media.save()
            return Response(connected_social_media)
        else:
            if instagram_link != '':
                connected_social_media.instagram_link = instagram_link
            if facebook_link != '':
                connected_social_media.facebook_link = facebook_link
            if tiktok_link != '':
                connected_social_media.tiktok_link = tiktok_link
            connected_social_media.save()

        serializer = ConnectedSocialMediaSerializer(connected_social_media)
        return Response(serializer.data)

class RecentFetchedPostAPI(APIView):
    permission_classes = [ClerkAuthenticated]
    def get(self, request):
        """
        Get the most recent fetched post, only 1 post
        """
        recent_fetched_posts = ProductListings.objects.all().order_by('-created_at')[:1]
        return Response(recent_fetched_posts)

class UpdateListingAPI(APIView):
    permission_classes = [ClerkAuthenticated]
    def post(self, request):
        data = request.data
        product_id = data.get('product_id')
        product = ProductListings.objects.get(product_id=product_id)
        product.images_list = data.get('images_list')
        product.product_title = data.get('product_title')
        product.price = data.get('price')
        product.product_details = data.get('product_details')
        product.about_this_item = data.get('about_this_item')
        product.product_description = data.get('product_description')
        product.save()
        return Response(product)

class PreviousListingAPI(APIView):
    permission_classes = [ClerkAuthenticated]
    def get(self, request):
        previous_listings = ProductListings.objects.all().order_by('-created_at')[1:]
        return Response(previous_listings)

class DashboardStatsAPI(APIView):
    permission_classes = [ClerkAuthenticated]
    def get(self, request):
        total_products = ProductListings.objects.count()
        approved_products = ProductListings.objects.filter(approved=True).count()
        disapproved_products = ProductListings.objects.filter(approved=False).count()
        
        total_connected_social_media = ConnectedSocialMedia.objects.first()
        connected_social_media_count = 0

        if total_connected_social_media:
            links = [
                total_connected_social_media.instagram_link,
                total_connected_social_media.facebook_link,
                total_connected_social_media.tiktok_link,
            ]
            connected_social_media_count = sum(1 for link in links if link.strip())

        return Response({
            "total_listings": total_products,
            "approved_listings": approved_products,
            "disapproved_listings": disapproved_products,
            "connected_social_media": connected_social_media_count
        })

class ProfileDataAPI(APIView):
    permission_classes = [ClerkAuthenticated]
    def get(self, request):
        first_name = request.clerk_user['data'].get('first_name')
        profile_image = request.clerk_user['data'].get('image_url')
        return Response({
            "first_name": first_name,
            "profile_image": profile_image
        })