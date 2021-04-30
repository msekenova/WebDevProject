from django.contrib import admin

# Register your models here.
from api.models import Comment, User, Book, Category, CommentSection, Author

admin.site.register(User)
admin.site.register(Comment)
admin.site.register(Book)
admin.site.register(Category)
admin.site.register(CommentSection)
admin.site.register(Author)
