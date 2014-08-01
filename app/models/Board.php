<?php

class Board extends \Eloquent {
	protected $fillable = [];

    public function user()
    {
        return $this->belongsTo('User');
    }

    public function notes()
    {
        return $this->hasMany('Note');
    }
}