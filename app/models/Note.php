<?php

class Note extends \Eloquent {
	protected $fillable = ['id', 'board_id', 'description', 'background'];

    public function board()
    {
        return $this->belongsTo('Board');
    }
}