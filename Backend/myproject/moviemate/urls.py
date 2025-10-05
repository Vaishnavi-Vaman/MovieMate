from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import MediaViewSet, ReviewViewSet, recommend

router = DefaultRouter()
router.register(r'media', MediaViewSet, basename='media')
router.register(r'reviews', ReviewViewSet, basename='reviews')

urlpatterns = [
    path('', include(router.urls)),
    path('recommend/', recommend, name='recommend'),
]
