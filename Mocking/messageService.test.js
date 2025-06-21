jest.mock('./dateUtils');//<-- Import :this must be at the top.
console.log('1.dateUtils is being mocked above');
const dateUtils=require('./dateUtils');
console.log('2.Imported moked dateUtils modules',dateUtils);

const { generateWelcomeMessage}=require('./messageService');

//Mocking
    test('should generate welcome message with mocked date',()=>{
    dateUtils.getFormattedDate.mockReturnValue('April 8, 2025');
    console.log('mocked getFormatDate to return 20th April 2025');
    const result=generateWelcomeMessage('Jane', new Date('2025-04-08'));
    console.log('called generateWelcome Messsage result',result)
    expect(dateUtils.getFormattedDate).toHaveBeenCalled();

    expect(result).toBe('Hello Jane, today is April 8, 2025');

});