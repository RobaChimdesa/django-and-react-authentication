from django.db import models

# Create your models here.
class post(models.Model):
    title = models.CharField(max_length = 200)
    body = models.TextField()
    # UserName = models.CharField(max_length = 100)
    # Email = models.EmailField(max_length = 100)
    # password = models.CharField(max_length = 100)
    def _str_(self):
        return f"post:{self.title}"
    