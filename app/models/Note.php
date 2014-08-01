<?php

class Note extends \Eloquent {
	protected $fillable = [];

    public function board()
    {
        return $this->belongsTo('Board');
    }
}