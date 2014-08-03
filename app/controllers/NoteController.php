<?php

class NoteController extends \BaseController {

    /**
     * Display a listing of the resource.
     *
     * @param $boardId
     * @return Response
     */
	public function index($boardId)
	{
		$board = Board::findOrFail($boardId);
        $board->load('notes');
        return Response::json(['status' => 200,'notes' => $board->notes]);
	}


	/**
	 * Show the form for creating a new resource.
	 *
	 * @return Response
	 */
	public function create()
	{

	}


	/**
	 * Store a newly created resource in storage.
	 *
	 * @return Response
	 */
	public function store()
	{
		if($note = Note::create(Input::all())){
            return Response::json(['status' => 200, 'mesg' => 'saved successfully!', 'note' => $note]);
        }else{
            return Response::json(['status' => 400, 'mesg' => 'could not create new record!'],400);
        }
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
     * @param $boardId
     * @param $noteId
     * @internal param int $id
     * @return Response
     */
	public function update($boardId, $noteId)
	{
        $note = Note::findOrFail($noteId);
        if(Input::get('description')){
            $note->description = Input::get('description');
        }else if(Input::get('background')){
            $note->background = Input::get('background');
        }
        if($note->save()){
            return Response::json(['status' => 200, 'mesg' => 'saved successfully!']);
        }else{
            return Response::json(['status' => 400, 'mesg' => 'option not allowed!'],400);
        }
	}


    /**
     * Remove the specified resource from storage.
     *
     * @param $boardId
     * @param $noteId
     * @internal param int $id
     * @return Response
     */
	public function destroy($boardId, $noteId)
	{
        $note = Note::findOrFail($noteId);
        $note->delete();
	}


}
