from django.contrib.auth.base_user import BaseUserManager
from django.core.exceptions import ValidationError
from django.core.validators import validate_email
from django.utils.translation import gettext_lazy as _

class CustomUserManager(BaseUserManager):
    def email_validator(self,email):
        try:
            validate_email(email)
        except ValidationError:
            raise ValueError(_("User must provide a valid email"))
    def create_user(self,first_name,last_name,emai,password,**extra_fields):

        if not first_name:
            raise ValueError(_("Users must submit a first name"))        
        if not last_name:
            raise ValueError(_("Users must submit a last name"))
        if email:
            email = self.normalize_email(email) 
            self.email_validator(email)
        else:
            raise ValueError(_("Base User: and eamil address is required"))    
        user = self.model(
        first_name=first_name,
        last_name = last_name,
        email=email,
        **extra_fields  )    
        user.set_password(password)
        extra_fields.setdefault("is_stff",False)
        extra_fields.setdeault("is_superuser",False)
        user.save()
        return user
    

    def create_superuser(self,first_name,last_name,emai,password,**extra_fields):
       
       extra_fields.setdefault("is_staff",True)
       extra_fields.setdefault("is_superuser",True)
       extra_fields.setdefault("is_active",True)

       if extra_fields.get("is_supper")

       if email:

            email = self.normalize_email(email) 
            self.email_validator(email)
       else:
            raise ValueError(_("Base User: and eamil address is required"))    
            
        