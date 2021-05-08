from django.urls import path
from rest_framework_simplejwt import views as jwt_views
from rest_framework_jwt.views import obtain_jwt_token
from .views import userViews, bookViews, commentViews, categoryViews, authorViews
#from .views.userViews import UserDetailAPIView
from .views.userViews import UserDetailAPIView

urlpatterns = [
    path('users/<int:pk>', UserDetailAPIView.as_view(), name='userDetail'),
    path('user/create/', userViews.create_user),
    path('users/<int:pk>/update', UserDetailAPIView.as_view(), name='userUpdate'),
    path('token/obtain/', jwt_views.TokenObtainPairView.as_view(), name='token_create'),
    path('token/refresh/', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),
    path('books/', bookViews.BookList.as_view()),
    path('books/<int:book_id>/', bookViews.BookDetailAPIView.as_view()),
    path('books/by_category/', bookViews.get_books_by_categories),
    path('comments/<int:page_id>/', commentViews.get_comments),
    path('comments/<int:page_id>/post/', commentViews.post_comment),
    path('comments/change/<int:comment_id>', commentViews.change_score),
    path('comments/delete/<int:comment_id>', commentViews.delete_comment),
    path('categories/', categoryViews.CategoryListAPIView.as_view()),
    path('categories/<int:category_id>', categoryViews.CategoryDetailAPIView.as_view()),
    path('authors/', authorViews.AuthorList.as_view()),
    path('authors/<int:author_id>', authorViews.author_detail)
]