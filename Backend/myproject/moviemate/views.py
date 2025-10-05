from rest_framework import viewsets, status
from rest_framework.decorators import action, api_view
from rest_framework.response import Response
from .models import Media, EpisodeProgress, Review
from .serializers import MediaSerializer, EpisodeProgressSerializer, ReviewSerializer
from django.shortcuts import get_object_or_404

class MediaViewSet(viewsets.ModelViewSet):
    queryset = Media.objects.all().order_by('-created_at')
    serializer_class = MediaSerializer

    # filter by query params
    def get_queryset(self):
        qs = super().get_queryset()
        genre = self.request.query_params.get('genre')
        platform = self.request.query_params.get('platform')
        status = self.request.query_params.get('status')
        qtype = self.request.query_params.get('media_type')
        if genre:
            qs = qs.filter(genre__icontains=genre)
        if platform:
            qs = qs.filter(platform__icontains=platform)
        if status:
            qs = qs.filter(status=status)
        if qtype:
            qs = qs.filter(media_type=qtype)
        return qs

    @action(detail=True, methods=['post'])
    def set_progress(self, request, pk=None):
        media = self.get_object()
        data = request.data
        ep, created = EpisodeProgress.objects.get_or_create(media=media)
        ep.episodes_watched = data.get('episodes_watched', ep.episodes_watched)
        ep.save()
        return Response(EpisodeProgressSerializer(ep).data)

class ReviewViewSet(viewsets.ModelViewSet):
    queryset = Review.objects.all().order_by('-created_at')
    serializer_class = ReviewSerializer

# very simple recommendations (placeholder)
@api_view(['GET'])
def recommend(request):
    # naive: top rated recent items
    top = Media.objects.filter(status='completed').order_by('-created_at')[:10]
    serializer = MediaSerializer(top, many=True)
    return Response(serializer.data)
