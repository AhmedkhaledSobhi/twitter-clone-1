# Generated by Django 4.1.7 on 2023-04-02 11:16

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Tweet',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('content', models.TextField(help_text='Tweet Content')),
                ('create_at', models.DateTimeField(auto_now_add=True)),
                ('like', models.BooleanField(blank=True, default=False)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='user_tweet', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Replay',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('content', models.TextField(help_text='Tweet Content')),
                ('create_at', models.DateTimeField(auto_now_add=True)),
                ('like', models.BooleanField(blank=True, default=False)),
                ('tweet', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='tweet_replay', to='tweet_controller.tweet')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='user_replay', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Media',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('media', models.ImageField(upload_to='tweet_media/')),
                ('replay', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='media_for_replay', to='tweet_controller.tweet')),
                ('tweet', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='media_for_tweet', to='tweet_controller.tweet')),
            ],
        ),
        migrations.CreateModel(
            name='CommentMedia',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('media', models.ImageField(upload_to='comment_media/')),
                ('comment', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='media_for_comment', to='tweet_controller.tweet')),
            ],
        ),
        migrations.CreateModel(
            name='Comment',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('content', models.TextField(help_text='Tweet Content')),
                ('create_at', models.DateTimeField(auto_now_add=True)),
                ('replay', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='comment_for_replay', to='tweet_controller.tweet')),
                ('tweet', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='comment_for_tweet', to='tweet_controller.tweet')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='user_comment', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
