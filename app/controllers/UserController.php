<?php

class UserController extends \BaseController {

    public function login()
    {
        if(Auth::attempt(['email' => Input::json('email'), 'password' => Input::json('password')])){
            return Response::json(Auth::user());
        } else{
            return Response::json(['flash' => 'Invalid Username/Password'], 500);
        }
    }

    public function logout()
    {
        Auth::logout();
        return Response::json(['flash' => 'Logged Out!']);
    }


	/**
	 * Store a newly created resource in storage.
	 *
	 * @return Response
	 */
	public function store()
	{
		//
	}


	/**
	 * Display the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function show($id)
	{
		//
	}


	/**
	 * Show the form for editing the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function edit($id)
	{
		//
	}


	/**
	 * Update the specified resource in storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function update($id)
	{
		//
	}


	/**
	 * Remove the specified resource from storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy($id)
	{
		//
	}


}
