from django.http import Http404
from rest_framework import status, generics
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
from datetime import datetime

from rest_framework.views import APIView

from ..models import Comment, CommentSection, User
from ..serializers import CommentSerializer


@api_view(['GET'])
@permission_classes([AllowAny])
def get_comments(request, page_id):
    try:
        comment_page = CommentSection.objects.get(id=page_id)
        comments = list(comment_page.comments.values())
        serializer = CommentSerializer(data=comments, many=True)
        if serializer.is_valid():
            return Response(serializer.data)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    except CommentSection.DoesNotExist:
        return Response('Page does not exist', status=status.HTTP_404_NOT_FOUND)


@api_view(['POST'])
@permission_classes((IsAuthenticated, ))
def post_comment(request, page_id):
    try:
        comment_page = CommentSection.objects.get(id=page_id)
        comment = Comment()
        comment.message = request.data
        comment.username = request.user.username
        comment.date_posted = datetime.now()
        comment.comment_section = comment_page
        comment.save()
        return Response()
    except CommentSection.DoesNotExist:
        return Response('Page does not exist', status=status.HTTP_404_NOT_FOUND)

@api_view(['PUT'])
@permission_classes((IsAuthenticated, ))
def change_score(request, comment_id):
    try:
        comment = Comment.objects.get(id=comment_id)
        comment.message = ' '
        comment.message = request.data
        comment.save()
        return Response()
    except Comment.DoesNotExist:
        return Response('Comment does not exist', status=status.HTTP_404_NOT_FOUND)

@api_view(['DELETE'])
@permission_classes((IsAuthenticated, ))
def delete_comment(request, comment_id):
    try:
        comment = Comment.objects.get(id=comment_id)
        if comment.username != request.user.username:
            return Response('Not an owner of comment', status=status.HTTP_400_BAD_REQUEST)
        else:
            comment.delete()
            return Response('Comment deleted', status=200)
    except Comment.DoesNotExist:
        return Response('Comment does not exist', status=status.HTTP_404_NOT_FOUND)
