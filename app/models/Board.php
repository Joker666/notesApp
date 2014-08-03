<?php

class Board extends \Eloquent {
	protected $fillable = ['id', 'user_id', 'title', 'description'];

    public function user()
    {
        return $this->belongsTo('User');
    }

    public function notes()
    {
        return $this->hasMany('Note');
    }
}