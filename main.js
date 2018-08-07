window.document.onload = landingSection();
function landingSection(){
	var x = 
	`
	<div id="heading">
       <h1>L o r e n z o &nbsp; I b a y </h1>
       <h3>Full &nbsp; Stack &nbsp; Web &nbsp; Developer</h3>
       <p> renzo324@gmail.com <span class="divider"> | </span> lorenzoibay.com</p>
       <p class="Socials"><a class="fab fa-facebook-square" href="fb.com/ExcellenceAtAnyCost"></a> <a class="fab fa-instagram" href="https://www.instagram.com/Lorenzo.Ibay/"></a> <a class="fab fa-github" href="github.com/renzo324"></a> <a class="fab fa-linkedin" href="https://www.linkedin.com/in/lorenzo-ibay/"></a> </p>
    </div>
	`;

	document.getElementById('app').innerHTML = x;
}
function aboutMe(){
	var x = ` 
	<div id="aboutMe" class="row">
        <div class="col-sm-3 p-0">
            <img src="https://avatars3.githubusercontent.com/u/31312773?s=460&v=4">
        </div>
        <div class="col-xs-1" id="imgCol"></div>
        <div id="elevatorPitch" class="col-sm-8">
            <h2>About Me:</h2>
    	    <p>I'm a developer based in Baguio city Philippines. As a gamer I saw the value of logic and problem solving.<br><br> Video games fascinated me so much that I taught myself to code to make games of my own.<br><br> That was two years ago. Right now, I use JavaScript to make cool and usefull stuff.</p>
        </div>
    </div>
	`;
	document.getElementById('app').innerHTML = x;
}
function skills(){
	var x = `
	<div id="skills" class="w-100">
	    <h1>Proficiencies</h1>
	    <ul class="logos">
	        <li><img src="http://lorenzoibay.com/wp-content/uploads/2018/07/Javascript.png">
	            <p>JavaScript</p>
	        </li>
	        <li><img src="http://lorenzoibay.com/wp-content/uploads/2018/07/React-Redux.png">
	            <p>ReactJS</p>
	        </li>
	        <li><img src="http://lorenzoibay.com/wp-content/uploads/2018/07/Node-JS.png">
	            <p>NodeJS</p>
	        </li>
	        <li><img src="http://lorenzoibay.com/wp-content/uploads/2018/07/Unity.png">
	            <p>Unity</p>
	        </li>
	        <li><img src="http://lorenzoibay.com/wp-content/uploads/2018/07/PHP-MySQL.png">
	            <p>PHP/MySql</p>
	        </li>
	        <li><img src="http://lorenzoibay.com/wp-content/uploads/2018/07/Wordpress.png">
	            <p>WordPress</p>
	        </li>
	    </ul>
	</div>
	<div class="clear"></div>
	`;
	document.getElementById('app').innerHTML = x;

}
function experience(){
	var x = `
	<ul class="footerList">
    <li>
        <h3>Vivixx Technical Academy</h3>
        <h3>Junior Developer</h3>
        <h3>January 2018 - Present</h3>
        <ol class="white">
            <li>Web Application development(HTML5 | CSS | JavaScript | Php | React)</li>
            <li>Server Administration (Apache, Cpanel)</li>
            <li>WordPress Development(Custom themes)</li>
            <li style="list-style: none;">
                <div class="inline floatLeft">
                    <ol>
                        <li>PSD to HTML</li>
                        <li>Responsive Web Design </li>
                        <li>Server troubleshooting </li>
                    </ol>
                </div>
                <div class="inline floatRight">
                    <ol>
                        <li>PSD to WordPress PHP</li>
                        <li>Website troubleshooting</li>
                        <li>Website migration</li>
                    </ol>
                </div>
                <div class="clear"></div>
            </li>
        </ol>
    </li>
    <li>
        <h3>Odesk</h3>
        <h3>Freelance Developer</h3>
        <h3>2014 - 2015</h3>
        <ol class="white">
            <li style="list-style: none;">
                <div class="inline floatLeft">
                    <ol>
                        <li>Server Administration(Django admin)</li>
                        <li>Database Management (PostgreSQL)</li>
                        <li>Hosting and Domain Setup </li>
                        <li>Website maintenance (Updates, fixes)</li>
                    </ol>
                </div>
                <div class="inline floatRight" style=" padding-right:15%;">
                    <ol>
                        <li>SSL Setup </li>
                        <li>SEO</li>
                    </ol>
                </div>
                <div class="clear"></div>
            </li>
        </ol>
    </li>
</ul>
	`;
	document.getElementById('app').innerHTML = x;
	document.getElementById('main').style.backgroundColor = '#696B6F';
}
function education(){
	var x = `
	<ul class="footerList">
    <li>
        <h3>Vivixx BootCamp <span class="address"> - Naguilian Road, Baguio City, Philippines</span></h3>
        <ol class="white">
            <li>Web Development</li>
            <li>2018</li>
        </ol>
    </li>
    <li>
        <h3>University of the Philippines <span class="address"> - Los Baños, Laguna, Philippines</span></h3>
        <ol class="white">
            <li>Bachelor of Science in Agriculture</li>
            <li>2012-2016</li>
        </ol>
    </li>
</ul>
	`;
	document.getElementById('app').innerHTML = x;
	document.getElementById('main').style.backgroundColor = '#696B6F';
}