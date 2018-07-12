from django.urls import path
from qaapp.views import *
app_name='qaapp'

urlpatterns=[
    path('questions/<int:id>/answers/add/',CreateAnswerViewApi.as_view(),name="addanswer"),
    path('questions/<int:id>/answers/',AnswersViewApi.as_view(),name="viewanswers"),
    path('questions/<int:id>/',QuestionViewApi.as_view(),name="viewquestion"),
    path('questions/add/',CreateQuestionViewApi.as_view(),name="addquestion"),
    path('questions/',QuestionsViewApi.as_view(),name="viewquestions"),

    path('voting/<str:type>/<int:id>/<str:action>/',VotingViewApi.as_view(),name="voting"),

    path('comments/<str:type>/<int:id>/add/',CreateCommentViewApi.as_view(),name="addcomment"),
    path('comments/<str:type>/<int:id>/',CommentsViewApi.as_view(),name="viewcomments"),
    path('signup/',SignUpView.as_view(),name="signup"),
    path('login/',LoginView.as_view(),name="login"),
    path('logout/',Logout_user,name="logout"),
]

