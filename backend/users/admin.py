# from django.contrib import admin
# from .models import post
from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from django.utils.translation import  gettext_lazy as _
from .forms import CustomUserChangeForm,CustomUserCreationForm
from .models import user

# Register your models here.
# admin.site.register(post)
class UserAdmin(BaseUserAdmin):
  ordering = ["email"]
  add_form = CustomUserCreationForm
  form = CustomUserChangeForm
  model = user
  list_display = ["email", "get_short_name", "first_name", "last_name", "is_staff", "is_active"]
  list_display_links = ["email"]
  list_filter = ["email","first_name","last_name","is_staff","is_active"]
  search_fields = ["email","first_name","last_name"]

  def get_short_name(self, obj):
    return obj.get_short_name()
  get_short_name_for_description = "Staff"
  

admin.site.register(user,UserAdmin)  
 


 
 
