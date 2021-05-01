from django.urls import path
from rest_framework_simplejwt import views as jwt_views
from .views import userViews, bookViews, commentViews, categoryViews, authorViews

urlpatterns = [
    path('user/create/', userViews.create_user),
    #path('user/get_info/<str:username>', userViews.get_user_info),
    path('token/obtain/', jwt_views.TokenObtainPairView.as_view(), name='token_create'),
    path('token/refresh/', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),
    path('books/', bookViews.BookList.as_view()),
    path('books/<int:book_id>/', bookViews.BookDetailAPIView.as_view()),
    #path('books/<str:category_list>', bookViews.get_books_by_categories),
    path('comments/<int:page_id>/', commentViews.get_comments),
    path('comments/post/', commentViews.post_comment),
    #path('comments/put/<int:comment_id>', commentViews.),
    path('comments/delete/<int:comment_id>', commentViews.delete_comment),
    path('categories/', categoryViews.CategoryListAPIView.as_view()),
    path('categories/<int:category_id>', categoryViews.CategoryDetailAPIView.as_view()),
    path('authors/', authorViews.AuthorList.as_view()),
    path('authors/<int:author_id>', authorViews.author_detail)
]