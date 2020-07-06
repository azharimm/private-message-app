<?php

namespace App\Transformers;
use App\User;

class UserTransformer extends League\Fractal\TransformersAbstract
{
	public function transform(User $user)
	{
		$scope = $this->getCurrentScope()->getIdentifier();

		return [
			'user_id' => $user->id,
			'name' => $user->name,
			'avatar' => $user->avatar($scope === 'users' || $scope === 'parent.users' ? 25: 45)
		];
	}
}