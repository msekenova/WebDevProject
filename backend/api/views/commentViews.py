from rest_framework import status, generics
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
from datetime import datetime
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


# @api_view(['POST'])
# @permission_classes([AllowAny])
# def post_comment(request, page_id):
#     try:
#         comment_page = CommentSection.objects.get(id=page_id)
#         comment = Comment
#         comment.message = request.data
#         comment.username = request.user.username
#         comment.date_posted = datetime.now()
#         comment.comment_section = comment_page
#         serializer = CommentSerializer(data=comment)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data, status=status.HTTP_201_CREATED)
#         else:
#             return Response('not valid')
#         return Response()
#     except CommentSection.DoesNotExist:
#         return Response('Page does not exist', status=status.HTTP_404_NOT_FOUND)

@api_view(['POST'])
@permission_classes([AllowAny])
def post_comment(request):
    serializer = CommentSerializer(data=request.data)
    if serializer.is_valid():
        user = serializer.save()
        if user:
            json = serializer.data
            return Response(json, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['DELETE'])
@permission_classes([AllowAny])
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
