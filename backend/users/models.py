from django.db import models
from django.contrib.auth.models import AbstractBaseUser,PermissionsMixin,Group,Permission
from django.utils.translation import gettext_lazy as _
from .managers import CustomUserManager
# Create your models here.
# class post(models.Model):
#     title = models.CharField(max_length = 200)
#     body = models.TextField()
#     # UserName = models.CharField(max_length = 100)
#     # Email = models.EmailField(max_length = 100)
#     # password = models.CharField(max_length = 100)
#     def _str_(self):
#         return f"post:{self.title}"
    

class user(AbstractBaseUser,PermissionsMixin):
    first_name = models.CharField(_("First Name"),max_length=100)    
    last_name = models.CharField(_("Last Name"),max_length=100)
    email= models.EmailField(_("Email Address"),max_length=254,unique=True)
    is_active = models.BooleanField(default=False)
    date_joined = models.DateTimeField(auto_now_add=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ["first_name","last_name"]


   

    user_groups = models.ManyToManyField(Group, related_name='custom_users')
    user_permissions = models.ManyToManyField(Permission, related_name='custom_users')



    objects = CustomUserManager() 

    class Meta:
        verbose_name = _("User")
        verbose_name_plural = _("Users")
    def __str__(self): 
        return self.email
    
    @property
    def get_full_name(self):
        return f"{self.first_name} {self.last_name }"