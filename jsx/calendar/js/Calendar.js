


function fillCurrentMonth(date){
	const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
	const lastDay = new Date(date.getFullYear(), date.getMonth()+1, 0);
	
	const month = [];
	let week = 0;
	month[week] = [];

	for (let i = 1; i <= lastDay.getDate();i++){
		let day = new Date(firstDay);
		day.setDate(i)
		if(day.getDay() === 0){
			month[week][6] = day
		} else {
			month[week][day.getDay()-1] = day
		}
		
		if(day.getDate() !== lastDay.getDate()){
			if( month[week].length === 7) {
				week++;
				month[week] = []
			}
		}
	}

	if(firstDay.getDay() !== 1){
		
		for(let i = firstDay.getDay()-2, j=0; i >= 0; i--, j--){
			let day = new Date(firstDay);
			day.setDate(j)
			month[0][i] = day
		}
	}
	
	if(lastDay.getDay() !== 0){

		for(let i = lastDay.getDay(), j = lastDay.getDate(); month[month.length-1].length < 7; i++, j++){
			let day = new Date(lastDay);
			day.setDate(j);
			month[month.length-1][i-1] = day
		}
	}

	return month
}


const  Calendar = (props) => {
	const { date } = props;

 	const allMonth = 'января, февраля, марта, апреля, мая, июня, июля, августа, сентября, октября, ноября, декабря'.split(',');
	const materialDayNum =  date.getDate();
	const materialDay = date.toLocaleDateString('ru', { weekday: 'long' });
	const month = allMonth[date.getMonth()];
	const monthStringLocal = date.toLocaleDateString('ru', {month: 'long'});
	const year = date.getFullYear();

	


	return (
		<div className="ui-datepicker">
			<div className="ui-datepicker-material-header">
				<div className="ui-datepicker-material-day">{ materialDay[0].toUpperCase() + materialDay.slice(1) }</div>
				<div className="ui-datepicker-material-date">
					<div className="ui-datepicker-material-day-num">{ materialDayNum }</div>
					<div className="ui-datepicker-material-month">{ month }</div>
					<div className="ui-datepicker-material-year">{ year }</div>
				</div>
			</div>
			<div className="ui-datepicker-header">
				<div className="ui-datepicker-title">
					<span className="ui-datepicker-month">{ monthStringLocal[0].toUpperCase() + monthStringLocal.slice(1) }</span>&nbsp;<span className="ui-datepicker-year">{ year }</span>
				</div>
			</div>
			<table className="ui-datepicker-calendar">
				<colgroup>
					<col/>
					<col/>
					<col/>
					<col/>
					<col/>
					<col className="ui-datepicker-week-end"/>
					<col className="ui-datepicker-week-end"/>
				</colgroup>
				<thead>
				<tr>
					<th scope="col" title="Понедельник">Пн</th>
					<th scope="col" title="Вторник">Вт</th>
					<th scope="col" title="Среда">Ср</th>
					<th scope="col" title="Четверг">Чт</th>
					<th scope="col" title="Пятница">Пт</th>
					<th scope="col" title="Суббота">Сб</th>
					<th scope="col" title="Воскресенье">Вс</th>
				</tr>
				</thead>
				<tbody>
				
					{ fillCurrentMonth(date).map( week => {
						return (
							<tr>
								{ week.map(day => {
									if(day.getMonth() !== date.getMonth()){
										return (
											<td>
												{ 
													<td className="ui-datepicker-other-month">{day.getDate()}</td>
												}
											</td>
										)
									} else if (day.getDate() === date.getDate()){
										return	<td className="ui-datepicker-today">{day.getDate()}</td>
									} else {
										return <td>{day.getDate()}</td>
									}
									
								} )}
								
							</tr>
						)
				}) }
				</tbody>
			</table>
		</div>
	)
}