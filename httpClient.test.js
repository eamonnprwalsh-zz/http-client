import axios from 'axios';
import { GET, POST, PUT, DELETE } from './httpClient.js'

jest.mock('axios');


test('get should fetch users', async () => {

    expect.assertions(1);
    const mockUsers = [{ name: 'Bob' }];
    const mockResponse = { data: [{ name: 'Bob' }] };

    axios.mockResolvedValue(mockResponse);
    const response = await GET('/users');
    expect(response.data).toEqual(mockUsers);

});

test('get should throw Error', async () => {

    expect.assertions(1);
    axios.mockRejectedValue(new Error('Threw an Error...'));

    await expect(GET('/users'))
        .rejects
        .toThrow('Threw an Error...');

});


test('post should add users', async () => {

    expect.assertions(1);
    const mockPostData = { name: 'Bob' };
    const mockResponse = { status: 200 };

    axios.mockResolvedValue(mockResponse);
    const responseData = await POST('/users/1', mockPostData);
    expect(responseData.status).toBe(200);

});


test('post should throw Error', async () => {

    expect.assertions(1);
    const mockPostData = { name: 'Bob' };

    axios.mockRejectedValue(new Error('Threw an Error...'));

    await expect(POST('/users/1', mockPostData))
        .rejects
        .toThrow('Threw an Error...');

});

test('put should update users', async () => {

    expect.assertions(1);
    const mockPutData = { name: 'Bob' };
    const mockResponse = { status: 200 };

    axios.mockResolvedValue(mockResponse);
    const responseData = await PUT('/users/1', mockPutData);
    expect(responseData.status).toBe(200);

});


test('put should throw Error', async () => {

    expect.assertions(1);
    const mockPutData = { name: 'Bob' };

    axios.mockRejectedValue(new Error('Threw an Error...'));

    await expect(PUT('/users', mockPutData))
        .rejects
        .toThrow('Threw an Error...');

});

test('delete should delete user', async () => {

    expect.assertions(1);
    const mockResponse = { status: 200 };

    axios.mockResolvedValue(mockResponse);
    const responseData = await DELETE('/users/1');
    expect(responseData.status).toBe(200);

});


test('delete should throw Error', async () => {

    expect.assertions(1);
    axios.mockRejectedValue(new Error('Threw an Error...'));

    await expect(DELETE('/users/1'))
        .rejects
        .toThrow('Threw an Error...');

});