from datetime import datetime
from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Category, Comment, Book, MyUser, Author


# class UserSerializer(serializers.Serializer):
#     class Meta:
#         model = User
#         fields = ('email', 'username', 'password')
#         extra_kwargs = {'password': {'write_only': True}}
#
#     def create(self, validated_data):
#         password = validated_data.pop('password', None)
#         instance = self.Meta.model(**validated_data)
#         if password is not None:
#             instance.set_password(password)
#         instance.save()
#         return instance
#
#     def update(self, instance, validated_data):
#         instance.email = validated_data.get('email', instance.email)
#         instance.username = validated_data.get('username', instance.username)
#         instance.password = validated_data.get('password', instance.password)
#         instance.save()
#
#         # if User.objects.get(id=instance.id):
#         #     account = User.objects.get(id=instance.id)
#         #     account_info = validated_data.get('userprofile')
#         #     account.save();
#         # else:
#         #     User.objects.create(user=instance)
#
#         return instance
#

class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ('id', 'email', 'username', 'password')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        password = validated_data.pop('password', None)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance

    def update(self, instance, validated_data):
        instance.username = validated_data.get('username', instance.username)
        instance.email = validated_data.get('email', instance.email)
        instance.save()

        if MyUser.objects.get(id=instance.id):
            profile = MyUser.objects.get(id=instance.id)
            profile.save()
        else:
            MyUser.objects.create(user=instance)
        return instance


class BookSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(read_only=True)
    comment_page_id = serializers.IntegerField(read_only=True)
    categories = serializers.StringRelatedField(many=True, read_only=True)
    authors = serializers.StringRelatedField(many=True, read_only=True)

    class Meta:
        model = Book
        fields = '__all__'


class AuthorSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(write_only=False)
    name = serializers.CharField()
    books = serializers.StringRelatedField(many=True, write_only=False)

    class Meta:
        model = Author
        fields = '__all__'


class CategorySerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField()
    books = serializers.StringRelatedField(many=True, read_only=True)

    def create(self, validated_data):
        category = Category.objects.create(name=validated_data.get('name'))
        return category

    def update(self, instance, validated_data):
        instance.name = validated_data.get('name')
        instance.save()
        return instance


class CommentSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(write_only=False)

    class Meta:
        model = Comment
        fields = '__all__'

# class CommentSerializer2(serializers.Serializer):
#     id = serializers.IntegerField(read_only=True)
#     username = serializers.CharField()
#     comment = serializers.CharField()
#     date_posted = serializers.DateTimeField(default=datetime.now())
#     comment_section = serializers.IntegerField(read_only=True)
#
#     def create(self, validated_data):
#         # comment = Comment.objects.create(username = validated_data.get('username'),
#         #                                  message = validated_data.get('message'),
#         #                                  date_posted = validated_data.get('date_posted'),
#         return Comment.objects.create(**validated_data)
#
#     def update(self, instance, validated_data):
#         instance.username = validated_data.get('username', instance.username)
#         instance.message = validated_data.get('message', instance.message)
#         instance.date_posted = validated_data.get('date_posted', instance.date_posted)
#         instance.comment_page = validated_data.get('comment_page', instance.comment_page)
#         instance.save()
#         return instance
