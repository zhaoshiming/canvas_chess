var chess=document.getElementById('chess');
var txt=chess.getContext('2d');
//画棋盘
for (var i = 0; i<15; i++) {
	txt.moveTo(15,15+i*30);
	txt.lineTo(435,15+i*30);
	txt.moveTo(15+i*30,15);
	txt.lineTo(15+i*30,435);
	txt.stroke();

}
//落子判断
var me=true;
var chessrecord=[];
for(var i=0;i<15;i++)
{
	chessrecord[i]=[];
	for(var j=0;j<15;j++){
		chessrecord[i][j]=0;
	}
}
//添加点击事件
chess.onclick=function (e) {
	var x=e.offsetX;
	var y=e.offsetY;
	var i=Math.floor(x/30);
	var j=Math.floor(y/30);
	//判断是否可以落子；
	if(chessrecord[i][j]==0){
		drawchess(i,j,me);
		if(me){
			chessrecord[i][j]=1;
		}
		else{
			chessrecord[i][j]=2;
		}
		me=!me;
	}
	
}
//点击实现落子
function drawchess(i,j){
	if(me)
		{txt.fillStyle="#FF0000";}
	else
	{ txt.fillStyle="#000000";}
	
	 txt.beginPath();
	 txt.arc(i*30+15,j*30+15,12,12,Math.PI*2,true);
	 txt.closePath();
	 txt.fill();
}
