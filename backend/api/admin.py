from django.contrib import admin

# Register your models here.
from django.contrib.auth.models import User
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from api.models import Comment, MyUser, Book, Category, CommentSection, Author

class MyUserInline(admin.StackedInline):
    model = MyUser
    can_delete = False
    verbose_name_plural = 'MyUsers'


class UserAdmin(BaseUserAdmin):
    inlines = (MyUserInline,)


admin.site.unregister(User)
admin.site.register(User, UserAdmin)
#admin.site.register(MyUser)
admin.site.register(Comment)
admin.site.register(Book)
admin.site.register(Category)
admin.site.register(CommentSection)
admin.site.register(Author)
