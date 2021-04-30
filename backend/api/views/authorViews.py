from rest_framework.views import APIView
from rest_framework import permissions, status, generics
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from rest_framework.response import Response

from api.models import Author
from api.serializers import AuthorSerializer


# getting authors list
class AuthorList(generics.ListCreateAPIView):
    queryset = Author.objects.all()
    serializer_class = AuthorSerializer
    permission_classes = [AllowAny]


# getting author's detail
@api_view(['GET', 'PUT', 'DELETE'])
@permission_classes([AllowAny])
def author_detail(request, author_id):
    try:
        author = Author.objects.get(id=author_id)
    except Author.DoesNotExist as e:
        return Response({'message': str(e)}, status=400)

    if request.method == 'GET':
        serializer = AuthorSerializer(author)
        return Response(serializer.data)
    # elif request.method == 'PUT':
    #     serializer = AuthorSerializer(instance=author, data=request.data)
    #     if serializer.is_valid():
    #         serializer.save()
    #         return Response(serializer.data)
    #     return Response(serializer.errors)
    # elif request.method == 'DELETE':
    #     author.delete()
    #     return Response({'message': 'deleted'}, status=204)
