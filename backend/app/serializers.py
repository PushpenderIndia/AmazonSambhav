from rest_framework import serializers
from app.models import ConnectedSocialMedia  

class ConnectedSocialMediaSerializer(serializers.ModelSerializer):
    class Meta:
        model = ConnectedSocialMedia
        fields = ['id', 'instagram_link', 'facebook_link', 'tiktok_link']