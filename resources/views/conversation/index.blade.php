@extends('layouts.app')

@section('content')
	@if(isset($conversation))
	<conversation-dashboard id="{{$conversation->id}}"></conversation-dashboard>
	@else
	<conversation-dashboard></conversation-dashboard>
	@endif
@endsection
