from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()

STATUS_CHOICES = [
    ('watching', 'Watching'),
    ('completed', 'Completed'),
    ('wishlist', 'Wishlist'),
    ('plan', 'Plan'),
]

MEDIA_TYPE = [
    ('movie', 'Movie'),
    ('tv', 'TV Show')
]

class Media(models.Model):
    title = models.CharField(max_length=255)
    director = models.CharField(max_length=255, blank=True, null=True)
    genre = models.CharField(max_length=100, blank=True, null=True)
    platform = models.CharField(max_length=100, blank=True, null=True)  # Netflix, Prime, etc
    media_type = models.CharField(max_length=10, choices=MEDIA_TYPE, default='movie')
    total_episodes = models.IntegerField(default=1)  # 1 for movies
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='wishlist')
    created_at = models.DateTimeField(auto_now_add=True)
    owner = models.ForeignKey(User, on_delete=models.CASCADE, related_name='media', null=True, blank=True)

    def __str__(self):
        return self.title

class EpisodeProgress(models.Model):
    media = models.ForeignKey(Media, on_delete=models.CASCADE, related_name='progress')
    episodes_watched = models.IntegerField(default=0)

    def __str__(self):
        return f"{self.media.title}: {self.episodes_watched}/{self.media.total_episodes}"

class Review(models.Model):
    media = models.ForeignKey(Media, on_delete=models.CASCADE, related_name='reviews')
    rating = models.PositiveSmallIntegerField(default=0)  # 0-10 or 0-5
    notes = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.media.title} - {self.rating}"
