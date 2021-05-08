import json

from django.http import Http404
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from rest_framework.views import APIView
from rest_framework import permissions, status, generics
from ..models import Book
from ..serializers import BookSerializer
from rest_framework.response import Response


class BookList(generics.ListCreateAPIView):
    queryset = Book.objects.all()
    serializer_class = BookSerializer
    permission_classes = [AllowAny]


class BookDetailAPIView(APIView):
    permission_classes = [AllowAny]

    def get_object(self, book_id):
        try:
            return Book.objects.get(id=book_id)
        except Book.DoesNotExist as e:
            raise Http404

    def get(self, request, book_id=None):
        book = self.get_object(book_id)
        serializer = BookSerializer(book)
        return Response(serializer.data)

    def put(self, request, book_id=None):
        book = self.get_object(book_id)
        serializer = BookSerializer(instance=book, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)

    def delete(self, request, book_id=None):
        book = self.get_object(book_id)
        book.delete()
        return Response({'message': 'deleted'}, status=204)


@api_view(['GET'])
@permission_classes([AllowAny])
def get_books_by_categories(request):
    category_list = json.loads(request.GET['category_list'])
    books = Book.category_manager.category_filter(category_list)
    serializer = BookSerializer(books, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def get_movie_by_authors(request):
    author_list = json.loads(request.GET['author_list'])
    books = Book.author_manager.author_filter(author_list)
    serializer = BookSerializer(books, many=True)
    return Response(serializer.data)
