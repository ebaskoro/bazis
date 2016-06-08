<?php

namespace AppBundle\Controller;


use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;


class DefaultController extends Controller
{
  
    /**
     * @Route("/")
     */
    public function indexAction()
    {
        return $this->render('Default/index.html.twig');
    }
  

    /**
     * @Route("/agent")
     */
    public function agentAction()
    {
        return $this->render('Default/agent.html.twig');
    }
  
}