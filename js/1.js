var btnleft=document.getElementById('left');
var btnright=document.getElementById('right');
var pictures=document.getElementsByClassName('picture');
var dots=document.getElementsByClassName('dot');
var index=0;
var time=0;
var timer;

function clearActive() 
{
	for (var i = 0; i < pictures.length; i++)
	{
		pictures[i].className='picture';
		dots[i].className='dot';
	}
}

function goIndex() 
{
	clearActive();
	pictures[index].className='picture active';
	dots[index].className='dot active';
}

function right() 
{
	if (index == pictures.length - 1) 
	{
		index = 0;
	}
	else
	{
		index += 1;
	}
	goIndex();
}

function left() 
{
	if (index == 0) 
	{
		index = pictures.length - 1;
	}
	else
	{
		index -= 1;
	}
	goIndex();
}
// 右按钮监听点击事件
btnright.addEventListener('click',function(){
	right();
	time = 0;
})

// 左按钮监听点击事件
btnleft.addEventListener('click',function(){
	left();
	time = 0;
})

function starttimer()
{
	timer = setInterval(function(){
		time++;
		if (time == 20) 
		{
			right();
			time = 0;
		}
	},100)
}

function stoptimer()
{
	clearInterval(timer);
}

starttimer();

function dotSkipper(i)
{
	clearActive();
	pictures[i].className='picture active';
	dots[i].className='dot active';
	index=i;
}
