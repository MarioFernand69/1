#include <iostream>
using namespace std;

int main()
{
int x;
int b;
int k;
cout<<"Enter a number"<<endl;
cin>>x;
cout<<"Enter another number."<<endl;
cin>>b;
int sum=x+b;
int difference=x-b;
int product=x*b;
int quotient=x/b;
cout<<"What do you want to do with these numbers? Enter 1 for addition, 2 for subtraction, 3 for multiplication, and 4 for dividing"<<endl;
cin>>k;
switch (k){

case 1:
cout<<sum<<endl;
break;

case 2:
cout<<difference<<endl;
break;
