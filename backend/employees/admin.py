from django.contrib import admin
from .models import Employee


@admin.register(Employee)
class EmployeeAdmin(admin.ModelAdmin):
    list_display = ('employee_id', 'name', 'email', 'department', 'designation', 'salary', 'joining_date')
    search_fields = ('employee_id', 'name', 'email', 'department', 'designation')
    list_filter = ('department',)
