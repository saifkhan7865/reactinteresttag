#What is this?

This is a react package that gives you a lot of control on the interest tags that you find while applying jobs (the interests),
normally these are used to give the interests

#Initialization

`npm install react-interest-tag --save`

Then...

#How do you use it?

```
<Tags 
    InputClass={"InputClass"} //class for the input the place where you will enter the text 
    CrossClass={"cross"} //cross button on the tag you can add hover event on the class 
    SendClass={"sendButton"} //the send button style in the input element 
    SendImage={rightarrow} // send image 
    CustomStyle={{ color: "#000", margin: "3px" }} //custom style for the element/tag i.e. the button 
    styleClass={"btn btn-outline-primary buttonHover"} //style for the button i.e the element/tag crossImage={cancel} //    cross Image value={{ 
    value: value, //BOOLEAN STATE TRUE = SHOW, FALSE = HIDE COMPONENT 
    interest: interest, //Use state array containing all the interests 
    setIntersts: setIntersts //set state method for removing and adding items 
    }} 
    />

```
#How do you use this thing with the backend?

You can send the `interest` array in the post request of your Fetch or Axios method

