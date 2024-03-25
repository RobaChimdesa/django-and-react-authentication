from django.contrib.auth.forms import UserChangeForm,UserCreationForm
from .models import user

class CustomUserCreationForm(UserCreationForm):
    class Meta(UserCreationForm):
        model:user
        fields = ["email","first_name","last_name"]
        error_class = "error"

class CustomUserChangeForm(UserChangeForm):
    class Meta(UserChangeForm):
        model:user
        fields = ["email","first_name","last_name"]
        error_class = "error"
                