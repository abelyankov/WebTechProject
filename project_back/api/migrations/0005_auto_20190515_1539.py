# Generated by Django 2.2.1 on 2019-05-15 09:39

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_auto_20190515_1210'),
    ]

    operations = [
        migrations.AddField(
            model_name='assignee',
            name='rating',
            field=models.FloatField(default=0.0),
        ),
        migrations.AlterField(
            model_name='task',
            name='created_at',
            field=models.DateTimeField(default=datetime.datetime(2019, 5, 15, 15, 39, 20, 805532)),
        ),
        migrations.DeleteModel(
            name='TemporaryBecomeAssigneeRequest',
        ),
    ]
