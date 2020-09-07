
  $(function(){
 
	// リストを非表示
	$('#fadein_area ul li').hide();
 
	// 繰り返し処理
	$('#fadein_area ul li').each(function(i) {
 
		// 遅延させてフェードイン
		$(this).delay(600 * i).fadeIn(1000);
 
	});
 
});
