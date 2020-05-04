<?php

declare(strict_types=1);

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class HomeController extends AbstractController
{
    /**
     *
     * @Route("/bookstore", name="bookstore_home")
     * @return Response
     */
    public function home(): Response
    {
        return $this->render('index.html.twig');
    }
}
