<?php

class BoardController extends \BaseController {

	/**
	 * Display a listing of the resource.
	 *
	 * @return Response
	 */
	public function index()
	{
        $user = Auth::user();
        $user->load('boards');
        return Response::json(['status' => 200,'boards' => $user->boards]);
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
        $board = Board::findOrFail($id);
        if(Input::get('description')){
            $board->description = Input::get('description');
        }else if(Input::get('title')){
            $board->title = Input::get('title');
        }
        if($board->save()){
            return Response::json(['status' => 200, 'mesg' => 'saved successfully!']);
        }else{
            return Response::json(['status' => 400, 'mesg' => 'option not allowed!'],400);
        }
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
