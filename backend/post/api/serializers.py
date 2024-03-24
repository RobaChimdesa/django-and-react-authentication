from rest_framework.serializers import ModelSerializer
from ..models import post
# from rest_framework import serializers
# from django.contrib.auth.forms import UserCreationForm
class postSerializer(ModelSerializer):
    class Meta:
        model = post
        fields = ('id','title','body')
# class SignupSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = UserCreationForm
#         fields = ('UserName','Email','password')
# class LoginSerializer(serializers.Serializer):
#     UserName = serializers.CharField(required=True)
#     password = serializers.CharField(required = True)                
