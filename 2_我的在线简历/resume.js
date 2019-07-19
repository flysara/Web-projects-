// JavaScript Document
document.getElementById("imag").onclick=function(){
	var r=confirm("想要了解我的兴趣爱好吗？")
	if(r==true)
		{
			document.write("我的兴趣爱好是唱歌、跳舞、听歌、看书、看电影、旅行、摄影，我对一切新事物都很好奇，所以我是一个很爱学习新东西的好奇宝宝")
		}
	else{
		document.write("相信你了解我以后会很喜欢我的哦~")
	}
}

document.getElementById("table").onclick=function(){
	alert("hello 很开心你能了解我");
}

document.getElementById("class").onclick=function(){
	alert("还有信号处理、图像处理、视频处理、数字信号、数字媒体、微波天线、高频等专业课程");
}