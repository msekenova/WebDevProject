import _datetime as datetime
from django.contrib.auth.models import AbstractUser
from django.contrib.postgres.fields import ArrayField
from django.db import models


# Create your models here.

class BookCategoryManager(models.Manager):
    def category_filter(self, category_list):
        books = super().get_queryset()
        for category in category_list:
            books = books.filter(category_name=category)
        return books


class BookAuthorManager(models.Manager):
    def author_filter(self, author_list):
        books = super().get_queryset()
        for author in author_list:
            books = books.filter(author_name=author)
        return books


class User(AbstractUser):
    pass


class CommentSection(models.Model):

    def __str__(self):
        return f'{self.id}'

    pass


class Comment(models.Model):
    username = models.CharField(max_length=500, blank=True)
    comment = models.CharField(max_length=500, blank=True)
    date_posted = models.DateTimeField(default=datetime.datetime.now())
    comment_section = models.ForeignKey(CommentSection, on_delete=models.CASCADE, related_name='comments', blank=True)

    def __str__(self):
        return f'{self.id}: {self.username} | {self.comment_section}'


class Book(models.Model):
    title = models.CharField(max_length=500, blank=True)
    isbn = models.CharField(max_length=500, blank=True)
    description = models.CharField(max_length=500, blank=True)
    thumbnailUrl = models.URLField(max_length=500, blank=True)
    published = models.BooleanField()
    page_count = models.IntegerField()
    comment_section = models.ForeignKey(CommentSection, on_delete=models.CASCADE)
    objects = models.Manager()
    category_manager = BookCategoryManager()
    author_manager = BookAuthorManager()

    class Meta:
        verbose_name = 'Book'
        verbose_name_plural = 'Books'

    def __str__(self):
        return f'{self.id}: {self.title} | {self.isbn}'


class Author(models.Model):
    name = models.CharField(max_length=500, blank=True)
    books = models.ManyToManyField(Book, blank=True, related_name='authors')

    class Meta:
        verbose_name = 'Author'
        verbose_name_plural = 'Authors'

    def __str__(self):
        return f'{self.id}: {self.name}'


class Category(models.Model):
    name = models.CharField(max_length=500, blank=True)
    books = models.ManyToManyField(Book, blank=True, related_name='categories')

    class Meta:
        verbose_name = 'Category'
        verbose_name_plural = 'Categories'

    def __str__(self):
        return f'{self.id}: {self.name}'
