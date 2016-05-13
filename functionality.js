//This file contains all the javascript and jquery functions for the html page

//Jquery Functions 
//1) enable the 'storeData' Submit Button when the three input-text are filled
$(document).ready(function(){
	$('.blog-title-form, .blog-topic-form, .blog-content-textarea').bind('keyup', function() {
	    if(allFilled()){ $('#storeDataButton').removeAttr('disabled') }else{ $('#storeDataButton').attr('disabled', 'disabled'); }
	});

	function allFilled() {
	    var filled = true;
	    $('body input').each(function() {
	        if($(this).val() == '') filled = false;
	    });
	    if($('body textarea').val() == '') filled = false;
	    return filled;
	}
})

contentVisible = true;

function storeData(){
	var formelements = document.getElementById("blogform")
	var blogTitle = formelements.elements[0].value;
	var blogTopic = formelements.elements[1].value;
	var blogContent = formelements.elements[2].value;

	var blogTitleDiv = document.createElement("div");
	blogTitleDiv.setAttribute("class", "blogTitle");
	var content = document.createTextNode(blogTitle); 
	blogTitleDiv.appendChild(content); 

	var blogTopicDiv = document.createElement("div");
	blogTopicDiv.setAttribute("class", "blogTopic");
	var contentTopic = document.createTextNode(blogTopic); 
	blogTopicDiv.appendChild(contentTopic); 

	var blogContentDiv = document.createElement("div");
	blogContentDiv.setAttribute("class", "blogContent");
	var contentContent = document.createTextNode(blogContent); 
	blogContentDiv.appendChild(contentContent); 

	document.querySelector(".content").appendChild(blogTitleDiv);
	document.querySelector(".content").appendChild(blogTopicDiv);
	document.querySelector(".content").appendChild(blogContentDiv);
	document.querySelector(".content").style.visibility = (contentVisible ? "visible" : "hidden");
	//window.alert(blogTitle)
	setStatus();
	return 0;
}
function setStatus(){
	var contentElements = document.getElementsByClassName('blogTitle');
	document.getElementsByClassName('submitStatus')[0].innerHTML = "Status: Complete, you have " + contentElements.length + " blog posts.";
}
function showBlogPosts(){
	document.querySelector(".content").style.visibility = "visible";
	document.getElementById("toggleShow").innerHTML = "Hide blog posts";
	contentVisible = true;
}
function hideBlogPosts(){
	document.querySelector(".content").style.visibility = "hidden";
	document.getElementById("toggleShow").innerHTML = "Show blog posts";
	contentVisible = false;
}
function toggleHide(){
	(contentVisible ? hideBlogPosts() : showBlogPosts())
}
function sortTitles(){

}
function filterTopics(){

}