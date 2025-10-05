from rest_framework import serializers
from .models import Media, EpisodeProgress, Review

class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = '__all__'

class EpisodeProgressSerializer(serializers.ModelSerializer):
    class Meta:
        model = EpisodeProgress
        fields = '__all__'

class MediaSerializer(serializers.ModelSerializer):
    progress = EpisodeProgressSerializer(many=True, read_only=True)
    reviews = ReviewSerializer(many=True, read_only=True)

    class Meta:
        model = Media
        fields = '__all__'
