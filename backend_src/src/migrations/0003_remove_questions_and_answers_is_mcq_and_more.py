# Generated by Django 4.1.6 on 2023-04-19 19:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('src', '0002_remove_questions_and_answers_split_content_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='questions_and_answers',
            name='Is_MCQ',
        ),
        migrations.RemoveField(
            model_name='test_result_specific',
            name='Is_MCQ',
        ),
        migrations.AddField(
            model_name='questions_and_answers',
            name='Type',
            field=models.TextField(default=''),
        ),
        migrations.AddField(
            model_name='test_result_specific',
            name='Type',
            field=models.TextField(default=''),
        ),
    ]