(function() {
    var cf, iv, nf, pf;
  
    cf = void 0;
  
    nf = void 0;
  
    pf = void 0;
  
    iv = $('#form fieldset');
  
    $('.proximo').click(function() {
      cf = $(this).parent();
      nf = $(this).parent().next();
      $('#progresso li').eq($('fieldset').index(cf)).addClass('ativo');
      cf.addClass("sumiu");
      return nf.addClass("apareceu");
    });
  
    $('.anterior').click(function() {
      cf = $(this).parent();
      pf = $(this).parent().prev();
      $('#progresso li').eq($('fieldset').index(cf)).removeClass('ativo');
      cf.removeClass("apareceu");
      return pf.removeClass("sumiu");
    });
  
    
  
  }).call(this);
  
  //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiPGFub255bW91cz4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQSxNQUFBLEVBQUEsRUFBQSxFQUFBLEVBQUEsRUFBQSxFQUFBOztFQUFBLEVBQUEsR0FBSzs7RUFDTCxFQUFBLEdBQUs7O0VBQ0wsRUFBQSxHQUFLOztFQUNMLEVBQUEsR0FBSyxDQUFBLENBQUUsZ0JBQUY7O0VBRUwsQ0FBQSxDQUFFLFVBQUYsQ0FBYSxDQUFDLEtBQWQsQ0FBb0IsUUFBQSxDQUFBLENBQUE7SUFDbkIsRUFBQSxHQUFLLENBQUEsQ0FBRSxJQUFGLENBQU8sQ0FBQyxNQUFSLENBQUE7SUFDTCxFQUFBLEdBQUssQ0FBQSxDQUFFLElBQUYsQ0FBTyxDQUFDLE1BQVIsQ0FBQSxDQUFnQixDQUFDLElBQWpCLENBQUE7SUFFTCxDQUFBLENBQUUsZUFBRixDQUFrQixDQUFDLEVBQW5CLENBQXNCLENBQUEsQ0FBRSxVQUFGLENBQWEsQ0FBQyxLQUFkLENBQW9CLEVBQXBCLENBQXRCLENBQThDLENBQUMsUUFBL0MsQ0FBd0QsT0FBeEQ7SUFFQSxFQUFFLENBQUMsUUFBSCxDQUFZLE9BQVo7V0FDQSxFQUFFLENBQUMsUUFBSCxDQUFZLFVBQVo7RUFQbUIsQ0FBcEI7O0VBU0EsQ0FBQSxDQUFFLFdBQUYsQ0FBYyxDQUFDLEtBQWYsQ0FBcUIsUUFBQSxDQUFBLENBQUE7SUFDcEIsRUFBQSxHQUFLLENBQUEsQ0FBRSxJQUFGLENBQU8sQ0FBQyxNQUFSLENBQUE7SUFDTCxFQUFBLEdBQUssQ0FBQSxDQUFFLElBQUYsQ0FBTyxDQUFDLE1BQVIsQ0FBQSxDQUFnQixDQUFDLElBQWpCLENBQUE7SUFFTCxDQUFBLENBQUUsZUFBRixDQUFrQixDQUFDLEVBQW5CLENBQXNCLENBQUEsQ0FBRSxVQUFGLENBQWEsQ0FBQyxLQUFkLENBQW9CLEVBQXBCLENBQXRCLENBQThDLENBQUMsV0FBL0MsQ0FBMkQsT0FBM0Q7SUFFQSxFQUFFLENBQUMsV0FBSCxDQUFlLFVBQWY7V0FDQSxFQUFFLENBQUMsV0FBSCxDQUFlLE9BQWY7RUFQb0IsQ0FBckIsRUFkQTs7O0VBd0JBLENBQUEsQ0FBRSxTQUFGLENBQVksQ0FBQyxNQUFiLENBQW9CLFFBQUEsQ0FBQSxDQUFBO0FBQ3BCLFFBQUEsTUFBQSxFQUFBLEdBQUEsRUFBQSxJQUFBLEVBQUE7SUFBQyxNQUFBLEdBQVMsQ0FBQSxDQUFFLFNBQUYsQ0FBWSxDQUFDLEdBQWIsQ0FBQSxDQUFBLEdBQXFCLENBQUEsQ0FBRSxTQUFGLENBQVksQ0FBQyxHQUFiLENBQUE7SUFDOUIsSUFBQSxHQUFPLENBQUEsQ0FBRSxPQUFGLENBQVUsQ0FBQyxHQUFYLENBQUE7SUFDUCxHQUFBLEdBQU0sSUFBQSxHQUFPO0lBQ2IsU0FBQSxHQUFZLENBQUEsQ0FBRSxZQUFGLENBQWUsQ0FBQyxHQUFoQixDQUFvQixhQUFBLEdBQWdCLElBQUksQ0FBQyxLQUFMLENBQVcsR0FBWCxDQUFlLENBQUMsT0FBaEIsQ0FBd0IsQ0FBeEIsQ0FBcEM7SUFFWixJQUFHLEdBQUEsSUFBTyxFQUFWO01BQ0M7YUFDQSxDQUFBLENBQUUsWUFBRixDQUFlLENBQUMsUUFBaEIsQ0FBeUIsTUFBekIsRUFGRDtLQUFBLE1BR0ssSUFBRyxHQUFBLElBQU8sS0FBVjtNQUNKO2FBQ0EsQ0FBQSxDQUFFLFlBQUYsQ0FBZSxDQUFDLFFBQWhCLENBQXlCLFVBQXpCLEVBRkk7S0FBQSxNQUdBLElBQUcsR0FBQSxJQUFPLEtBQVY7TUFDSjthQUNBLENBQUEsQ0FBRSxZQUFGLENBQWUsQ0FBQyxRQUFoQixDQUF5QixLQUF6QixFQUZJO0tBQUEsTUFHQSxJQUFHLEdBQUEsSUFBTyxLQUFWO01BQ0o7YUFDQSxDQUFBLENBQUUsWUFBRixDQUFlLENBQUMsUUFBaEIsQ0FBeUIsVUFBekIsRUFGSTtLQUFBLE1BR0EsSUFBRyxHQUFBLElBQU8sS0FBVjtNQUNKO2FBQ0EsQ0FBQSxDQUFFLFlBQUYsQ0FBZSxDQUFDLFFBQWhCLENBQXlCLE1BQXpCLEVBRkk7S0FBQSxNQUdBLElBQUcsR0FBQSxJQUFPLEtBQVY7TUFDSjthQUNBLENBQUEsQ0FBRSxZQUFGLENBQWUsQ0FBQyxRQUFoQixDQUF5QixNQUF6QixFQUZJO0tBQUEsTUFHQSxJQUFHLEdBQUEsSUFBTyxFQUFWO01BQ0o7YUFDQSxDQUFBLENBQUUsWUFBRixDQUFlLENBQUMsUUFBaEIsQ0FBeUIsTUFBekIsRUFGSTtLQUFBLE1BQUE7YUFJSixDQUFBLENBQUUsWUFBRixDQUFlLENBQUMsR0FBaEIsQ0FBb0IsTUFBcEIsRUFKSTs7RUF4QmMsQ0FBcEI7QUF4QkEiLCJzb3VyY2VzQ29udGVudCI6WyJjZiA9IHVuZGVmaW5lZFxubmYgPSB1bmRlZmluZWRcbnBmID0gdW5kZWZpbmVkXG5pdiA9ICQoJyNmb3JtIGZpZWxkc2V0JylcblxuJCgnLnByb3hpbW8nKS5jbGljayAtPlxuXHRjZiA9ICQodGhpcykucGFyZW50KClcblx0bmYgPSAkKHRoaXMpLnBhcmVudCgpLm5leHQoKVxuXHRcblx0JCgnI3Byb2dyZXNzbyBsaScpLmVxKCQoJ2ZpZWxkc2V0JykuaW5kZXgoY2YpKS5hZGRDbGFzcyAnYXRpdm8nXG5cblx0Y2YuYWRkQ2xhc3MoXCJzdW1pdVwiKVxuXHRuZi5hZGRDbGFzcyhcImFwYXJlY2V1XCIpXG5cdFx0XG4kKCcuYW50ZXJpb3InKS5jbGljayAtPlxuXHRjZiA9ICQodGhpcykucGFyZW50KClcblx0cGYgPSAkKHRoaXMpLnBhcmVudCgpLnByZXYoKVxuXHRcblx0JCgnI3Byb2dyZXNzbyBsaScpLmVxKCQoJ2ZpZWxkc2V0JykuaW5kZXgoY2YpKS5yZW1vdmVDbGFzcyAnYXRpdm8nXG5cdFxuXHRjZi5yZW1vdmVDbGFzcyhcImFwYXJlY2V1XCIpXG5cdHBmLnJlbW92ZUNsYXNzKFwic3VtaXVcIilcblxuIyBDYWxjdWxhIElNQ1xuJCgnI2FsdHVyYScpLmNoYW5nZSAtPlxuXHRhbHR1cmEgPSAkKCcjYWx0dXJhJykudmFsKCkgKiAkKCcjYWx0dXJhJykudmFsKClcblx0cGVzbyA9ICQoJyNwZXNvJykudmFsKClcblx0aW1jID0gcGVzbyAvIGFsdHVyYVxuXHRyZXN1bHRhZG8gPSAkKCcjcmVzdWx0YWRvJykudmFsKCdTZXUgSU1DIMOpOiAnICsgTWF0aC5yb3VuZChpbWMpLnRvRml4ZWQoMikpXG5cdFxuXHRpZiBpbWMgPD0gMTdcblx0XHRyZXN1bHRhZG9cblx0XHQkKCcjcmVzdWx0YWRvJykuYWRkQ2xhc3MoJ3J1aW0nKVxuXHRlbHNlIGlmIGltYyA8PSAxOC40OVxuXHRcdHJlc3VsdGFkb1xuXHRcdCQoJyNyZXN1bHRhZG8nKS5hZGRDbGFzcygncmF6b2F2ZWwnKVxuXHRlbHNlIGlmIGltYyA8PSAyNC45OVxuXHRcdHJlc3VsdGFkb1xuXHRcdCQoJyNyZXN1bHRhZG8nKS5hZGRDbGFzcygnYm9tJylcblx0ZWxzZSBpZiBpbWMgPD0gMjkuOTlcblx0XHRyZXN1bHRhZG9cblx0XHQkKCcjcmVzdWx0YWRvJykuYWRkQ2xhc3MoJ3Jhem9hdmVsJylcblx0ZWxzZSBpZiBpbWMgPD0gMzQuOTlcblx0XHRyZXN1bHRhZG9cblx0XHQkKCcjcmVzdWx0YWRvJykuYWRkQ2xhc3MoJ3J1aW0nKVxuXHRlbHNlIGlmIGltYyA8PSAzOS45OVxuXHRcdHJlc3VsdGFkb1xuXHRcdCQoJyNyZXN1bHRhZG8nKS5hZGRDbGFzcygncnVpbScpXG5cdGVsc2UgaWYgaW1jID49IDQwXG5cdFx0cmVzdWx0YWRvXG5cdFx0JCgnI3Jlc3VsdGFkbycpLmFkZENsYXNzKCdydWltJylcblx0ZWxzZVxuXHRcdCQoJyNyZXN1bHRhZG8nKS52YWwoXCJFcnJvXCIpIl19
  //# sourceURL=coffeescript